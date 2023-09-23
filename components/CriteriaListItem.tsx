interface Props {
  title: string;
  description: string;
  extraClasses?: string;
}

const CriteriaListItem: React.FC<Props> = ({ description, extraClasses, title }) => {
  return (
    <li
      className={`text-[14px] font-normal leading-7 phones:text-[12px] phones:leading-[22.55px] phones:text-center phones:mt-5 ${extraClasses}`}>
      <span className='text-razzle-dazzle-rose text-[16px] font-bold phones:text-[13px]'>
        {title}:
      </span>
      &nbsp;{description}
    </li>
  );
};

export default CriteriaListItem;
