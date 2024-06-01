
const useInput = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = formData.get('location') as string
        if(data || data.length > 0){
         return   console.log("show data ",data)
        }
        console.log('pta nhi aya',data)
      };
  return {
    handleSubmit
  }
}

export default useInput