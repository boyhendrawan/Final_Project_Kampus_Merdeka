

function useGetDifferentTime(startTime="2023-06-26T17:56:30.003502", endTime="2023-06-26T17:56:30.003502") {
    // Convert time strings to Date objects
    // console.log(startTime);
    const startDate = new Date(`${startTime}`);
    const endDate = new Date(`${endTime}`);
    // Calculate the time difference in milliseconds
    let timeDiff = Math.abs( endDate - startDate);
  
    // Convert milliseconds to hours, minutes, and seconds
    const hours = Math.floor(timeDiff / 3600000);
    timeDiff %= 3600000;
    const minutes = Math.floor(timeDiff / 60000);
    timeDiff %= 60000;
    const seconds = Math.floor(timeDiff / 1000);
    
    
    // Format the result as a string
    const formattedTimeDiff = `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  
    return formattedTimeDiff;
  }
  

  

export default useGetDifferentTime