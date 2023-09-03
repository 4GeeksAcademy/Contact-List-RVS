const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tarjetas: [],
			nuevatarjeta: [],
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			cargarData: async () => {

				try {
					let resp = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/rvargas")
					let data = await resp.json()

					setStore({ tarjetas: data })
					setStore({ nuevatarjeta: data })

				} catch (err) {
					console.log(err)
				}

			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

			},

			newContact: async (currentContact) => {

				const store = getStore()
				try {
					let respuesta = await fetch("https://playground.4geeks.com/apis/fake/todos/user/rvargas", {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data)

					});
					setStore({ nuevatarjeta: [...store.nuevatarjeta, currentContact] })
				} catch (error) {
					console.log(error);
				}
			},

			editContact: (currentContact) => {

				const store = getStore()

				let searchContact = store.contacts.find(person => currentContact.id == person.id)

				if (searchContact) {
					searchContact.full_name = currentContact.full_name
					searchContact.email = currentContact.email
					searchContact.address = currentContact.address
					searchContact.phone = currentContact.phone
				}

				//reset the global store
				setStore({ demo: demo });
			}
		},

	}
}

export default getState;
