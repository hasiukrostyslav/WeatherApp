type ImageProps = { theme: 'light' | 'dark' };

function Image({ theme }: ImageProps) {
  return (
    <img
      className="hidden xl:block h-auto w-20 absolute top-5 right-10"
      src={`../../${theme === 'dark' ? 'moon' : 'sun'}.png`}
      alt={theme === 'dark' ? 'moon' : 'sun'}
    />
  );
}

export default Image;
