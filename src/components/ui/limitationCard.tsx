const LimitationCard = ({
  title,
  description,
  iconPath,
}: {
  title: string
  description: string
  iconPath: string
}) => {
  return (
    <div
      className={`grid-${title} flex flex-col pt-8 pr-8 pb-8 pl-8 rounded-2xl shadow-2xl shadow-borders limitation-card`}
    >
      <div className="flex flex-row items-center mb-4">
        <img src={iconPath} className="mr-2" alt={`card ${title} logo`} />
        <p className="m-0 font-semibold text-xl text-gunmetal">{title}</p>
      </div>
      <div>
        <p className="m-0 text-dark-electric-blue text-base leading-normal">
          {description}
        </p>
      </div>
    </div>
  )
}

export default LimitationCard
