"use client";
import withAuth from '@/components/withAuth';

const DashboardPage = ({ params }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="m-14">
        <h1>Welcome to the Dashboard, User {params.userid}</h1>
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
};

export default withAuth(DashboardPage);
