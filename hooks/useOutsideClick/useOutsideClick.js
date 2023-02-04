import { useEffect } from "react";

function useOutsideClick (ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && ref.current.contains(event.target)) {
          alert("You clicked outside of me!");
        }
      }
      // Bind the event listener
      document.addEventListener("click", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref]);
  }
  
  export default useOutsideClick;