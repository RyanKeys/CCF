const BackButton = (href) => {
  console.log(href.href);
  return (
    <a href={href.href}>
      <div className=" btn btn-secondary btn-lg py-1">
        <h3>&#8592;</h3>
      </div>
    </a>
  );
};

export default BackButton;
