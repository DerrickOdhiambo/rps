import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='image'>
          <Image
            priority
            src='/images/logo.svg'
            className=''
            height={100}
            width={144}
            alt='Rock Paper Scissors'
          />
        </div>
        <div className='score'>
          <h4>score</h4>
          <span>12</span>
        </div>
      </div>
    </>
  );
};

export default Header;
