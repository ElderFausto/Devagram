import avatarImg from '../../public/images/avatar.svg'

export default function Avatar({src}) {

  const getAvatar = _ => {
    if(src && src !== 'undefined') {
      return src;
    }

    return avatarImg.src;
  }

  return (
    <img 
    src={getAvatar()}
    alt='Avatar'
    className='avatar'
    />
  );
}