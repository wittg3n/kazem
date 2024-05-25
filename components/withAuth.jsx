import { useRouter } from 'next/navigation';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { isAuthenticated, user, loading } = useAuth();
    const params = useParams(); // Access params using useParams

    useEffect(() => {
      if (!loading) {
        if (!isAuthenticated) {
          // If the user is not authenticated, redirect to the login page
          router.push('/');
        } else if (user && params.userId !== user.userID) {
          console.log('Redirecting to user dashboard:', user.userID); // Add logging
          // If the user is authenticated but trying to access another user's dashboard,
          // redirect to their own dashboard
          router.push(`/dashboard/${user.userID}`);
        }
      }
    }, [isAuthenticated, user, loading, router, params.userId]);

    if (loading) {
      return <div>Loading...</div>; // Show a loading indicator while checking authentication status
    }

    return isAuthenticated ? <WrappedComponent {...props} params={params} /> : null;
  };
};

export default withAuth;
