type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-max py-6 relative h-full">
      {children}
    </div>
  );
}

export default Container;
