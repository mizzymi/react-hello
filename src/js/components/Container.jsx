const Container = ({ children, className }) => {
  return <div className={`d-flex gap-4 ${className}`}>{children}</div>;
};

export default Container;
