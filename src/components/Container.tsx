type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col justify-center mx-auto max-w-fit min-w-[80%] sm:min-w-[450px] py-6 relative min-h-screen md:min-w-[700px]">
      {children}
    </div>
  );
}

export default Container;
