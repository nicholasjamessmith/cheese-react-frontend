import url from './url'
import { redirect } from 'react-router-dom'

//Create action for creating new cheese posts
export const createAction = async ({ request }) => {
  //parse out form data
  const formData = await request.formData();
  //construct the body for our api call
  const newCheese = {
    name: formData.get("name"),
    //double check order of 'type / origin_country' if error
    type: formData.get("type"),
    origin_country: formData.get("origin_country")
  }
  
  //make a request to create a todo
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newCheese)
  })
  //redirect to the index page
  return redirect("/")
}

//Update action for updating todos
export const updateAction = async ({ request, params }) => {
  //get the id from params
  const id = params.id
  //parse out the form data
  const formData = await request.formData();
  //construct the updated cheese
  const updatedCheese = {
    name: formData.get("name"),
    type: formData.get("type"),
    origin_country: formData.get("origin_country")
  }
  
  //make a request to update a todo
  await fetch(url + id, {
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedCheese)
  })
  return redirect(`/post/${id}`)
}

// Delete Action for Deleting Todos
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete a todo
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}