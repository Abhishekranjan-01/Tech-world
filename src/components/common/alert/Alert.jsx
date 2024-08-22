// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const invokeNotify = function (callback) {
  console.log("Invoke notify");

  callback();
};

export default function Alert({
  // label = "No label is being provided",
  // alert = false,
  ...props
}) {
  // const notify = () => toast(label);
  // toast(label);
  // notify();
  // if (alert) notify();

  return <ToastContainer {...props} />;
}
