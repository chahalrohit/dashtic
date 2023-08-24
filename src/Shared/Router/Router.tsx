import React, { lazy } from "react"
import { Routes, Route } from "react-router-dom";
import Modals from "../../components/Elements/Modal/Modal";
import { Loader } from "../Components/Loader/Loader"
const App = lazy(() => import("../Layouts/App"));
const Custompages = lazy(() => import("../Layouts/custompages"));
const Switcherapp = lazy(() => import("../Layouts/Switcherapp"));
const Dashboard = lazy(() => import("../../components/Dashboard/Dashboard01/Dashboard01"));
const Dashboard2 = lazy(() => import("../../components/Dashboard/Dashboard02/Dashboard02"));
const Dashboard3 = lazy(() => import("../../components/Dashboard/Dashboard03/Dashboard03"));
const Dashboard4 = lazy(() => import("../../components/Dashboard/Dashboard04/Dashboard04"));
const Dashboard5 = lazy(() => import("../../components/Dashboard/Dashboard05/Dashboard05"));
const Chat = lazy(() => import("../../components/Apps/Chat/Chat/Chat"));
const Chat02 = lazy(() => import("../../components/Apps/Chat/Chat02/Chat02"));
const Chat03 = lazy(() => import("../../components/Apps/Chat/Chat03/Chat03"));
const Contactlist = lazy(() => import("../../components/Apps/Contact/Contactlist/Contactlist"));
const Contactlist02 = lazy(() => import("../../components/Apps/Contact/Contactlist02/Contactlist02"));
const FileManager = lazy(() => import("../../components/Apps/FileManager/FileManager/FileManager"));
const FileManager02 = lazy(() => import("../../components/Apps/FileManager/FileManager02/FileManager02"));
const FileDetails = lazy(() => import("../../components/Apps/FileManager/FileDetails/FileDetails"));
const FileAttachments = lazy(() => import("../../components/Apps/FileManager/FileAttachments/FileAttachments"));
const Todolist = lazy(() => import("../../components/Apps/TodoList/Todolist/Todolist"));
const TodoList03 = lazy(() => import("../../components/Apps/TodoList/TodoList03/TodoList03"));
const TodoList02 = lazy(() => import("../../components/Apps/TodoList/TodoList02/TodoList02"));
const UserList01 = lazy(() => import("../../components/Apps/UserList/UserList01/UserList01"));
const UserList02 = lazy(() => import("../../components/Apps/UserList/UserList02/UserList02"));
const UserList03 = lazy(() => import("../../components/Apps/UserList/UserList03/UserList03"));
const UserList04 = lazy(() => import("../../components/Apps/UserList/UserList04/UserList04"));
const LeafletMaps = lazy(() => import("../../components/Apps/Maps/LeafletMaps/LeafletMaps"));
const SimpleMaps = lazy(() => import("../../components/Apps/Maps/SimpleMaps/SimpleMaps"));
const Calendar = lazy(() => import("../../components/Apps/Calendar/Calendar"));
const Pagesessiontimeout = lazy(() => import("../../components/Apps/Pagesessiontimeout/Pagesessiontimeout"));
const Notifications = lazy(() => import("../../components/Apps/Notifications/Notifications"));
const ImageCrop = lazy(() => import("../../components/Apps/ImageCrop/ImageCrop"));
const Rating = lazy(() => import("../../components/Apps/Rating/Rating"));
const TimeLine = lazy(() => import("../../components/Apps/TimeLine/TimeLine"));
const Loaders = lazy(() => import("../../components/Apps/Loaders/Loaders"));
const Counters = lazy(() => import("../../components/Apps/Counters/Counters"));
const Sweetalerts = lazy(() => import("../../components/Apps/Sweetalerts/Sweetalerts"));
const Rangeslider = lazy(() => import("../../components/Apps/Rangeslider/Rangeslider"));
const Widgets = lazy(() => import("../../components/Widgets/Widgets/Widgets"));
const ChartWidgets = lazy(() => import("../../components/Widgets/ChartWidgets/ChartWidgets"));
const FormElements = lazy(() => import("../../components/Forms/FormElements/FormElements"));
const AdvancedForms = lazy(() => import("../../components/Forms/AdvancedForms/AdvancedForms"));
const FormWizard = lazy(() => import("../../components/Forms/FormWizard/FormWizard"));
const FormEdit = lazy(() => import("../../components/Forms/FormEdit/FormEdit"));
const FormElementSizes = lazy(() => import("../../components/Forms/FormElementSizes/FormElementSizes"));
const FormTreeView = lazy(() => import("../../components/Forms/FormTreeView/FormTreeView"));
const Area = lazy(() => import('./../../components/Charts/ApexCharts/Area/Area'));
const Bar = lazy(() => import('./../../components/Charts/ApexCharts/Bar/Bar'));
const Column = lazy(() => import('./../../components/Charts/ApexCharts/Column/Column'));
const Line = lazy(() => import('./../../components/Charts/ApexCharts/Line/Line'));
const Mixed = lazy(() => import('./../../components/Charts/ApexCharts/Mixed/Mixed'));
const Echart = lazy(() => import("../../components/Charts/Echart/Echart"));
const Chartjs = lazy(() => import("../../components/Charts/Chartjs/Chartjs"));
const Defaulttable = lazy(() => import("../../components/Tables/Defaulttable/Defaulttable"));
const DataTable = lazy(() => import("../../components/Tables/DataTable/DataTable"));
const Accordion = lazy(() => import("../../components/Elements/Accordion/Accordion"));
const Alerts = lazy(() => import("../../components/Elements/Alerts/Alerts"));
const Avatars = lazy(() => import("../../components/Elements/Avatars/Avatars"));
const Badges = lazy(() => import("../../components/Elements/Badges/Badges"));
const Breadcrumb = lazy(() => import("../../components/Elements/Breadcrumd/Breadcrumd"));
const Button = lazy(() => import("../../components/Elements/Button/Button"));
const Cards = lazy(() => import("../../components/Elements/Cards/Cards"));
const CardImages = lazy(() => import("../../components/Elements/CardImages/CardImages"));
const Carousel = lazy(() => import("../../components/Elements/Carousel/Carousel"));
const Dropdown = lazy(() => import("../../components/Elements/Dropdown/Dropdown"));
const Footers = lazy(() => import("../../components/Elements/Footers/Footers"));
const Header = lazy(() => import("../../components/Elements/Header/Header"));
const List = lazy(() => import("../../components/Elements/List/List"));
const MediaObject = lazy(() => import("../../components/Elements/MediaObject/MediaObject"));
const Modal = lazy(() => import("../../components/Elements/Modal/Modal"));
const Navigation = lazy(() => import("../../components/Elements/Navigation/Navigation"));
const Pagination = lazy(() => import("../../components/Elements/Pagination/Pagination"));
const Panel = lazy(() => import("../../components/Elements/Panel/Panel"));
const Tooltips = lazy(() => import("../../components/Elements/Tooltips/Tooltips"));
const Tags = lazy(() => import("../../components/Elements/Tags/Tags"));
const Tabs = lazy(() => import("../../components/Elements/Tabs/Tabs"));
const Popover = lazy(() => import("../../components/Elements/Popover/Popover"));
const Progress = lazy(() => import("../../components/Elements/Progress/Progress"));
const FontAwesome = lazy(() => import("../../components/Icons/FontAwesome/FontAwesome"));
const SimpleLineIcons = lazy(() => import("../../components/Icons/SimpleLineIcons/SimpleLineIcons"));
const MaterialDesignIcons = lazy(() => import("../../components/Icons/MaterialDesignIcons/MaterialDesignIcons"));
const FeatherIcons = lazy(() => import("../../components/Icons/FeatherIcons/FeatherIcons"));
const ThemifyIcons = lazy(() => import("../../components/Icons/ThemifyIcons/ThemifyIcons"));
const Pe7Icons = lazy(() => import("../../components/Icons/Pe7Icons/Pe7Icons"));
const FlagIcons = lazy(() => import("../../components/Icons/FlagIcons/FlagIcons"));
const IonicIcons = lazy(() => import("../../components/Icons/IonicIcons/IonicIcons"));
const Bootstrap5SVGIcons = lazy(() => import("../../components/Icons/Bootstrap5SVGIcons/Bootstrap5SVGIcons"));
const MaterialIcons = lazy(() => import("../../components/Icons/MaterialIcons/MaterialIcons"));
const WeatherIcons = lazy(() => import("../../components/Icons/WeatherIcons/WeatherIcons"));
const Profile01 = lazy(() => import("../../components/Pages/Profile/Profile01/Profile01"));
const Profile03 = lazy(() => import("../../components/Pages/Profile/Profile03/Profile03"));
const Profile02 = lazy(() => import("../../components/Pages/Profile/Profile02/Profile02"));
const AboutUs = lazy(() => import("../../components/Pages/AboutUs/AboutUs"));
const EditProfile = lazy(() => import("../../components/Pages/EditProfile/EditProfile"));
const Settings = lazy(() => import("../../components/Pages/Settings/Settings"));
const EmailCompose = lazy(() => import("../../components/Pages/Email/EmailCompose/EmailCompose"));
const EmailInbox = lazy(() => import("../../components/Pages/Email/EmailInbox/EmailInbox"));
const EmailRead = lazy(() => import("../../components/Pages/Email/EmailRead/EmailRead"));
const Pricing03 = lazy(() => import("../../components/Pages/Pricing/Pricing03/Pricing03"));
const Pricing02 = lazy(() => import("../../components/Pages/Pricing/Pricing02/Pricing02"));
const Pricing01 = lazy(() => import("../../components/Pages/Pricing/Pricing01/Pricing01"));
const Invoicelist = lazy(() => import("../../components/Pages/Invoice/Invoicelist/Invoicelist"));
const Invoice01 = lazy(() => import("../../components/Pages/Invoice/Invoice01/Invoice01"));
const Invoice02 = lazy(() => import("../../components/Pages/Invoice/Invoice02/Invoice02"));
const Invoice03 = lazy(() => import("../../components/Pages/Invoice/Invoice03/Invoice03"));
const AddInvoice = lazy(() => import("../../components/Pages/Invoice/AddInvoice/AddInvoice"));
const EditInvoice = lazy(() => import("../../components/Pages/Invoice/EditInvoice/EditInvoice"));
const BlogPost = lazy(() => import("../../components/Pages/Blog/BlogPost/BlogPost"));
const BlogStyles = lazy(() => import("../../components/Pages/Blog/BlogStyles/BlogStyles"));
const Blog03 = lazy(() => import("../../components/Pages/Blog/Blog03/Blog03"));
const Blog01 = lazy(() => import("../../components/Pages/Blog/Blog01/Blog01"));
const Blog02 = lazy(() => import("../../components/Pages/Blog/Blog02/Blog02"));
const Wishlist = lazy(() => import("../../components/Pages/E-commerce/Wishlist/Wishlist"));
const Checkout = lazy(() => import("../../components/Pages/E-commerce/Checkout/Checkout"));
const ShoppingCart = lazy(() => import("../../components/Pages/E-commerce/ShoppingCart/ShoppingCart"));
const ProductDetails = lazy(() => import("../../components/Pages/E-commerce/ProductDetails/ProductDetails"));
const Products = lazy(() => import("../../components/Pages/E-commerce/Products/Products"));
const Gallery = lazy(() => import("../../components/Pages/Gallery/Gallery"));
const FAQS = lazy(() => import("../../components/Pages/FAQS/FAQS"));
const Terms = lazy(() => import("../../components/Pages/Terms/Terms"));
const Search = lazy(() => import("../../components/Pages/Search/Search"));
const EmptyPage = lazy(() => import("../../components/Pages/EmptyPage/EmptyPage"));
const Error400 = lazy(() => import("../../components/ErrorPages/Error400/Error400"));
const Error401 = lazy(() => import("../../components/ErrorPages/Error401/Error401"));
const Error403 = lazy(() => import("../../components/ErrorPages/Error403/Error403"));
const Error404 = lazy(() => import("../../components/ErrorPages/Error404/Error404"));
const Error500 = lazy(() => import("../../components/ErrorPages/Error500/Error500"));
const Error503 = lazy(() => import("../../components/ErrorPages/Error503/Error503"));
const ComingSoon = lazy(() => import("../../components/Account/ComingSoon/ComingSoon"));
const UnderConstruction = lazy(() => import("../../components/Account/UnderConstruction/UnderConstruction"));
const Login01 = lazy(() => import("../../components/Account/Login/Login01/Login01"));
const Login02 = lazy(() => import("../../components/Account/Login/Login02/Login02"));
const Login03 = lazy(() => import("../../components/Account/Login/Login03/Login03"));
const Register03 = lazy(() => import("../../components/Account/Register/Register03/Register03"));
const Register02 = lazy(() => import("../../components/Account/Register/Register02/Register02"));
const Register01 = lazy(() => import("../../components/Account/Register/Register01/Register01"));
const ForgetPassword02 = lazy(() => import("../../components/Account/ForgetPassword/ForgetPassword02/ForgetPassword02"));
const ForgetPassword01 = lazy(() => import("../../components/Account/ForgetPassword/ForgetPassword01/ForgetPassword01"));
const ForgetPassword03 = lazy(() => import("../../components/Account/ForgetPassword/ForgetPassword03/ForgetPassword03"));
const ResetPassword01 = lazy(() => import("../../components/Account/ResetPassword/ResetPassword01/ResetPassword01"));
const ResetPassword02 = lazy(() => import("../../components/Account/ResetPassword/ResetPassword02/ResetPassword02"));
const ResetPassword03 = lazy(() => import("../../components/Account/ResetPassword/ResetPassword03/ResetPassword03"));
const LockScreen03 = lazy(() => import("../../components/Account/LockScreen/LockScreen03/LockScreen03"));
const LockScreen02 = lazy(() => import("../../components/Account/LockScreen/LockScreen02/LockScreen02"));
const LockScreen01 = lazy(() => import("../../components/Account/LockScreen/LockScreen01/LockScreen01"));
const Height = lazy(() => import("../../components/Utilities/Height/Height"));
const Width = lazy(() => import("../../components/Utilities/Width/Width"));
const Padding = lazy(() => import("../../components/Utilities/Padding/Padding"));
const Typography = lazy(() => import("../../components/Utilities/Typography/Typography"));
const Margin = lazy(() => import("../../components/Utilities/Margin/Margin"));
const Colors = lazy(() => import("../../components/Utilities/Colors/Colors"));
const Flexitems = lazy(() => import("../../components/Utilities/FlexItems/FlexItems"));
const Border = lazy(() => import("../../components/Utilities/Border/Border"));
const Display = lazy(() => import("../../components/Utilities/Display/Display"));
const TypiconsIcons = lazy(() => import("../../components/Icons/TypiconsIcons/TypiconsIcons"));
const Login = lazy(() => import("../../Auth/Login/Login"));
const Sigup = lazy(() => import("../../Auth/Signup/Signup"));
const Auth = lazy(() => import("../../Auth/FirebaseAuth/Auth"));

export const Routing = () => {

  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
          <Route index element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}Auth/Login/Login`} element={<Login />} />
          <Route path={`${import.meta.env.BASE_URL}Auth/Signup/Signup`} element={<Sigup />} />
        </Route>
        <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
          <Route>
            <Route index element={<Dashboard />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/dashboard01`} element={<Dashboard />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/dashboard02`} element={<Dashboard2 />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/dashboard03`} element={<Dashboard3 />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/dashboard04`} element={<Dashboard4 />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/dashboard05`} element={<Dashboard5 />} />
          </Route>
          <Route>
            <Route path={`${import.meta.env.BASE_URL}apps/chat/chat`} element={<Chat />} />
            <Route path={`${import.meta.env.BASE_URL}apps/chat/chat02`} element={<Chat02 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/chat/chat03`} element={<Chat03 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/contact/contactlist`} element={<Contactlist />} />
            <Route path={`${import.meta.env.BASE_URL}apps/contact/contactlist02`} element={<Contactlist02 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filemanager`} element={<FileManager />} />
            <Route
              path={`${import.meta.env.BASE_URL}apps/filemanager/filemanager02`}
              element={<FileManager02 />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}
              element={<FileDetails />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}apps/filemanager/fileattachments`}
              element={<FileAttachments />}
            />
            <Route path={`${import.meta.env.BASE_URL}apps/todolist/todolist`} element={<Todolist />} />
            <Route path={`${import.meta.env.BASE_URL}apps/todolist/todolist02`} element={<TodoList02 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/todolist/todolist03`} element={<TodoList03 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/userlist/userlist01`} element={<UserList01 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/userlist/userlist02`} element={<UserList02 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/userlist/userlist03`} element={<UserList03 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/userlist/userlist04`} element={<UserList04 />} />
            <Route path={`${import.meta.env.BASE_URL}apps/Maps/SimpleMaps`} element={<SimpleMaps />} />
            <Route path={`${import.meta.env.BASE_URL}apps/maps/leafletmaps`} element={<LeafletMaps />} />
            <Route path={`${import.meta.env.BASE_URL}apps/calendar`} element={<Calendar />} />
            <Route path={`${import.meta.env.BASE_URL}apps/imagecrop`} element={<ImageCrop />} />
            <Route
              path={`${import.meta.env.BASE_URL}apps/pagesessiontimeout`}
              element={<Pagesessiontimeout />}
            />
            <Route path={`${import.meta.env.BASE_URL}apps/notifications`} element={<Notifications />} />
            <Route path={`${import.meta.env.BASE_URL}apps/sweetalerts`} element={<Sweetalerts />} />
            <Route path={`${import.meta.env.BASE_URL}apps/rangeslider`} element={<Rangeslider />} />
            <Route path={`${import.meta.env.BASE_URL}apps/counters`} element={<Counters />} />
            <Route path={`${import.meta.env.BASE_URL}apps/loaders`} element={<Loaders />} />
            <Route path={`${import.meta.env.BASE_URL}apps/timeline`} element={<TimeLine />} />
            <Route path={`${import.meta.env.BASE_URL}apps/rating`} element={<Rating />} />
          </Route>
          <Route>
            <Route path={`${import.meta.env.BASE_URL}widgets/widgets`} element={<Widgets />} />
            <Route path={`${import.meta.env.BASE_URL}widgets/chartwidgets`} element={<ChartWidgets />} />
          </Route>
          <Route>
            <Route path={`${import.meta.env.BASE_URL}forms/formelements`} element={<FormElements />} />
            <Route path={`${import.meta.env.BASE_URL}forms/advancedforms`} element={<AdvancedForms />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formwizard`} element={<FormWizard />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formedit`} element={<FormEdit />} />
            <Route
              path={`${import.meta.env.BASE_URL}forms/formelementsizes`}
              element={<FormElementSizes />}
            />
            <Route path={`${import.meta.env.BASE_URL}forms/formtreeview`} element={<FormTreeView />} />
          </Route>
          <Route>
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/area`} element={<Area />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/bar`} element={<Bar />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/line`} element={<Line />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/column`} element={<Column />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/mixed`} element={<Mixed />} />
            <Route path={`${import.meta.env.BASE_URL}charts/chartjs`} element={<Chartjs />} />
            <Route path={`${import.meta.env.BASE_URL}charts/echart`} element={<Echart />} />
          </Route>
          <Route>
            <Route path={`${import.meta.env.BASE_URL}tables/defaulttable`} element={<Defaulttable />} />
            <Route path={`${import.meta.env.BASE_URL}tables/datatable`} element={<DataTable />} />
          </Route>
          <Route>
            <Route path={`${import.meta.env.BASE_URL}elements/accordion`} element={<Accordion />} />
            <Route path={`${import.meta.env.BASE_URL}elements/alerts`} element={<Alerts />} />
            <Route path={`${import.meta.env.BASE_URL}elements/avatars`} element={<Avatars />} />
            <Route path={`${import.meta.env.BASE_URL}elements/badges`} element={<Badges />} />
            <Route path={`${import.meta.env.BASE_URL}elements/breadcrumb`} element={<Breadcrumb />} />
            <Route path={`${import.meta.env.BASE_URL}elements/buttons`} element={<Button />} />
            <Route path={`${import.meta.env.BASE_URL}elements/cards`} element={<Cards />} />
            <Route path={`${import.meta.env.BASE_URL}elements/cardimages`} element={<CardImages />} />
            <Route path={`${import.meta.env.BASE_URL}elements/Carousel`} element={<Carousel />} />
            <Route path={`${import.meta.env.BASE_URL}elements/dropdown`} element={<Dropdown />} />
            <Route path={`${import.meta.env.BASE_URL}elements/footers`} element={<Footers />} />
            <Route path={`${import.meta.env.BASE_URL}elements/headers`} element={<Header />} />
            <Route path={`${import.meta.env.BASE_URL}elements/list`} element={<List />} />
            <Route path={`${import.meta.env.BASE_URL}elements/mediaobject`} element={<MediaObject />} />
            <Route path={`${import.meta.env.BASE_URL}elements/modal`} element={<Modals/>} />
            <Route path={`${import.meta.env.BASE_URL}elements/navigation`} element={<Navigation />} />
            <Route path={`${import.meta.env.BASE_URL}elements/pagination`} element={<Pagination />} />
            <Route path={`${import.meta.env.BASE_URL}elements/panel`} element={<Panel />} />
            <Route path={`${import.meta.env.BASE_URL}elements/popover`} element={<Popover />} />
            <Route path={`${import.meta.env.BASE_URL}elements/progress`} element={<Progress />} />
            <Route path={`${import.meta.env.BASE_URL}elements/tabs`} element={<Tabs />} />
            <Route path={`${import.meta.env.BASE_URL}elements/tags`} element={<Tags />} />
            <Route path={`${import.meta.env.BASE_URL}elements/tooltips`} element={<Tooltips />} />
          </Route>
          <Route>
            <Route path={`${import.meta.env.BASE_URL}icons/fontawesome`} element={<FontAwesome />} />
            <Route
              path={`${import.meta.env.BASE_URL}icons/materialdesignicons`}
              element={<MaterialDesignIcons />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}icons/simplelineicons`}
              element={<SimpleLineIcons />}
            />
            <Route path={`${import.meta.env.BASE_URL}icons/feathericons`} element={<FeatherIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/ionicicons`} element={<IonicIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/flagicons`} element={<FlagIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/pe7icons`} element={<Pe7Icons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/themifyicons`} element={<ThemifyIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/typiconsicons`} element={<TypiconsIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/weathericons`} element={<WeatherIcons />} />
            <Route path={`${import.meta.env.BASE_URL}icons/materialicons`} element={<MaterialIcons />} />
            <Route
              path={`${import.meta.env.BASE_URL}icons/bootstrap5svgicons`}
              element={<Bootstrap5SVGIcons />}
            />
          </Route>
          <Route>
            <Route path={`${import.meta.env.BASE_URL}pages/profile/profile01`} element={<Profile01 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/profile/profile02`} element={<Profile02 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/profile/profile03`} element={<Profile03 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/aboutus`} element={<AboutUs />} />
            <Route path={`${import.meta.env.BASE_URL}pages/editprofile`} element={<EditProfile />} />
            <Route path={`${import.meta.env.BASE_URL}pages/settings`} element={<Settings />} />
            <Route
              path={`${import.meta.env.BASE_URL}pages/email/emailcompose`}
              element={<EmailCompose />}
            />
            <Route path={`${import.meta.env.BASE_URL}pages/email/emailinbox`} element={<EmailInbox />} />
            <Route path={`${import.meta.env.BASE_URL}pages/email/emailread`} element={<EmailRead />} />
            <Route path={`${import.meta.env.BASE_URL}pages/pricing/pricing01`} element={<Pricing01 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/pricing/pricing02`} element={<Pricing02 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/pricing/pricing03`} element={<Pricing03 />} />
            <Route
              path={`${import.meta.env.BASE_URL}pages/invoice/invoicelist`}
              element={<Invoicelist />}
            />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoice01`} element={<Invoice01 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoice02`} element={<Invoice02 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoice03`} element={<Invoice03 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice/addinvoice`} element={<AddInvoice />} />
            <Route
              path={`${import.meta.env.BASE_URL}pages/invoice/editinvoice`}
              element={<EditInvoice />}
            />
            <Route path={`${import.meta.env.BASE_URL}pages/blog/blog01`} element={<Blog01 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blog/blog02`} element={<Blog02 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blog/blog03`} element={<Blog03 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blog/blogstyles`} element={<BlogStyles />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blog/blogpost`} element={<BlogPost />} />
            <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/products`} element={<Products />} />
            <Route
              path={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`}
              element={<ProductDetails />}
            />
            <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails/:id`} element={<ProductDetails />} />
            <Route
              path={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart`}
              element={<ShoppingCart />}
            />
            <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/checkout`} element={<Checkout />} />
            <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`} element={<Wishlist />} />
            <Route path={`${import.meta.env.BASE_URL}pages/gallery`} element={<Gallery />} />
            <Route path={`${import.meta.env.BASE_URL}pages/faqs`} element={<FAQS />} />
            <Route path={`${import.meta.env.BASE_URL}pages/terms`} element={<Terms />} />
            <Route path={`${import.meta.env.BASE_URL}pages/search`} element={<Search />} />
          </Route>
          <Route>
            <Route path={`${import.meta.env.BASE_URL}utilities/color`} element={<Colors />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/flexitems`} element={<Flexitems />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/height`} element={<Height />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/border`} element={<Border />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/display`} element={<Display />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/margin`} element={<Margin />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/padding`} element={<Padding />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/typography`} element={<Typography />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/width`} element={<Width />} />

          </Route>
          <Route>
            <Route path={`${import.meta.env.BASE_URL}pages/emptypage`} element={<EmptyPage />} />
          </Route>
        </Route>
        <Route path={`${import.meta.env.BASE_URL}`} element={<Custompages />}>

          <Route path={`${import.meta.env.BASE_URL}errorpages/error400`} element={<Error400 />} />
          <Route path={`${import.meta.env.BASE_URL}errorpages/error401`} element={<Error401 />} />
          <Route path={`${import.meta.env.BASE_URL}errorpages/error403`} element={<Error403 />} />
          <Route path={`${import.meta.env.BASE_URL}errorpages/error404`} element={<Error404 />} />
          <Route path={`${import.meta.env.BASE_URL}errorpages/error500`} element={<Error500 />} />
          <Route path={`${import.meta.env.BASE_URL}errorpages/error503`} element={<Error503 />} />
          <Route path={`${import.meta.env.BASE_URL}account/comingsoon`} element={<ComingSoon />} />
          <Route
            path={`${import.meta.env.BASE_URL}account/underconstruction`}
            element={<UnderConstruction />}
          />
          <Route path={`${import.meta.env.BASE_URL}account/login/login01`} element={<Login01 />} />
          <Route path={`${import.meta.env.BASE_URL}account/login/login02`} element={<Login02 />} />
          <Route path={`${import.meta.env.BASE_URL}account/login/login03`} element={<Login03 />} />
          <Route path={`${import.meta.env.BASE_URL}account/register/register01`} element={<Register01 />} />
          <Route path={`${import.meta.env.BASE_URL}account/register/register02`} element={<Register02 />} />
          <Route path={`${import.meta.env.BASE_URL}account/register/register03`} element={<Register03 />} />
          <Route
            path={`${import.meta.env.BASE_URL}account/forgetpassword/forgetpassword01`}
            element={<ForgetPassword01 />}
          />
          <Route
            path={`${import.meta.env.BASE_URL}account/forgetpassword/forgetpassword02`}
            element={<ForgetPassword02 />}
          />
          <Route
            path={`${import.meta.env.BASE_URL}account/forgetpassword/forgetpassword03`}
            element={<ForgetPassword03 />}
          />
          <Route
            path={`${import.meta.env.BASE_URL}account/resetpassword/resetpassword01`}
            element={<ResetPassword01 />}
          />
          <Route
            path={`${import.meta.env.BASE_URL}account/resetpassword/resetpassword02`}
            element={<ResetPassword02 />}
          />
          <Route
            path={`${import.meta.env.BASE_URL}account/resetpassword/resetpassword03`}
            element={<ResetPassword03 />}
          />
          <Route
            path={`${import.meta.env.BASE_URL}account/lockscreen/lockscreen01`}
            element={<LockScreen01 />}
          />
          <Route
            path={`${import.meta.env.BASE_URL}account/lockscreen/lockscreen02`}
            element={<LockScreen02 />}
          />
          <Route
            path={`${import.meta.env.BASE_URL}account/lockscreen/lockscreen03`}
            element={<LockScreen03 />}
          />
        </Route>
        <Route>
          <Route path={`${import.meta.env.BASE_URL}pages/switcher`} element={<Switcherapp />} />
        </Route>
      </Routes>
    </React.Suspense>
  )
}