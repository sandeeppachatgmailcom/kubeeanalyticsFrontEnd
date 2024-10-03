
function useCalculateTimeDuration (){

    function getTimeDuration  (startTime) {
        if (!startTime) return "Invalid time";
      
         
        const start = new Date(startTime);
        const now = new Date(); // Current time
      
        
        const duration = now - start;
      
        const hours = Math.floor(duration / (1000 * 60 * 60));
        const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((duration % (1000 * 60)) / 1000);
      
        return `${hours}h ${minutes}m ${seconds}s`;
      };
      

    return getTimeDuration
}

export default useCalculateTimeDuration
