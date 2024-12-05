import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return function ProtectedComponent(props: any) {
    const router = useRouter();

    useEffect(() => {
      const savedUser = localStorage.getItem('user');
      if (!savedUser) {
        router.replace('/');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
