type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col justify-center mx-auto w-max py-6 relative min-h-screen md:min-w-[700px]">
      {children}
    </div>
  );
}

export default Container;
