import CustomLayout from "../component/CustomLayout"; // sửa tên đúng

import { ReactElement, ReactNode } from "react";

// Định nghĩa interface cho Page có layout tùy chỉnh
interface PageWithLayout {
  (): ReactElement;
  getLayout?: (page: ReactElement) => ReactNode;
}

// Component 404 Page
const PagesNotFound: PageWithLayout = () => {
  return (
    <div className="p-notification">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

// Gắn layout tùy chỉnh cho page
PagesNotFound.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <CustomLayout>{page}</CustomLayout>;
};

export default PagesNotFound;
