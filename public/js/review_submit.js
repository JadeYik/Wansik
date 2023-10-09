window.onload =() =>{

  contentForm()

}

function contentForm()
{
 document.querySelector("#reviewFrom").addEventListener("submit",async (e)=>{
    e.preventDefault();
    const form = e.target
    // const formOdject = {
    //   title: form.title.value,
    //   content:form.content.value
    // }
    const formData = new FormData(form)
    formData.append('userName',form.userName.value)
    formData.append('title',form.title.value)
    formData.append('content',form.content.value)
    formData.append('image', form.image.files[0])
    const res = await fetch("/html/review_submit.html/submit/user/:name/rest/:rName",{
      method: 'POST',
      body: formData})
    
  })
}
