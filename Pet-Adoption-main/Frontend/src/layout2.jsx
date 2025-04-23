import HeaderUser from "./Header_User";
import Footer from "./Footer";
function Layout2({children}) {
  return (
    <div className="container">
      <HeaderUser />
      <div className="content">{children}</div>
      <Footer/>
    </div>
  );
}

export default Layout2;