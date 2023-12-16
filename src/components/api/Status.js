const Status = ({ type = 'active' }) => {
    let statusClass = '';
  
    switch (type) {
      case 'active':
        statusClass = 'bg-green-400 dark:opacity-90 dark:bg-green-500';
        break;
      case 'error':
        statusClass = 'bg-red-400 dark:opacity-90 dark:bg-red-500';
        break;
      default:
        statusClass = 'bg-green-400 dark:opacity-90 dark:bg-green-500';
    }
  
    return (
      <div className="">
        <p className={`text-center rounded-3xl text-white text-sm py-1 px-2 ${statusClass}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </p>
      </div>
    );
  };
  
  export default Status;
  