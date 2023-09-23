import ButtonLayout from './layout/ButtonLayout';

interface Props {
  title: string;
  extraClasses?: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ extraClasses, onClick, title, type }) => {
  return (
    <ButtonLayout extraClasses={extraClasses}>
      <button onClick={onClick} type={type} className='w-full h-full'>
        {title}
      </button>
    </ButtonLayout>
  );
};

export default Button;
