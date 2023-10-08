type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-11/12 sm:w-9/12 lg:w-7/12 xl:w-6/12 py-6 relative h-full">
      {children}
    </div>
  );
}

export default Container;
