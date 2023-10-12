type SpinnerProps = {
  theme: 'light' | 'dark';
};

function Spinner({ theme }: SpinnerProps) {
  return (
    <div
      className={`w-4 h-4 text-sm rounded-full fixed top-1/2 left-1/2 ${
        theme === 'light' ? 'gray-spin' : 'blue-spin'
      }`}
    ></div>
  );
}

export default Spinner;
