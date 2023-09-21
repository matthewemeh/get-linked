interface Props {
  title: string;
  description: string;
  extraClasses?: string;
}

const CriteriaListItem: React.FC<Props> = ({ description, extraClasses, title }) => {
  return (
    <li className={`text-[14px] font-normal leading-7 ${extraClasses}`}>
      <span className='text-razzle-dazzle-rose text-[16px] font-bold'>{title}:</span>
      &nbsp;{description}
    </li>
  );
};

export default CriteriaListItem;
