const Scenarios = [
	{
		name: "The Game of Life",
		icon: null,
		description: {
			general: "This is the John Conway's game of life",
			images: []
		},
		authors: [
			{
				name: "John Horton ",
				lastname: "Conway",
				description:
					"Nació el 26 de diciembre de 1937 en Liverpool. Cuando tenía 11 años, su ambición era convertirse en matemático. Estudió matemáticas en el Gonville and Caius College de Cambridge.​ Obtuvo una licenciatura en 1959 y bajo la supervisión de Harold Davenport, comenzó a realizar investigaciones en teoría de números. Comenzó a interesarse por los ordinales infinitos. Obtuvo su doctorado en 1964 y fue nombrado miembro universitario y profesor de matemáticas en el Sidney Sussex College de Cambridge.​ Después de dejar Cambridge en 1986, asumió el cargo de presidente de la cátedra de matemáticas John von Neumann en la Universidad de Princeton​",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 1,
					name: "Alive Cell",
					description: "represent the alive state of a cell",
					image: null,
					icon: null
				},
				{
					id: 2,
					name: "Dead Cell",
					description: "represent the dead state of a cell",
					image: null,
					icon: null
				}
			],
			agents: [],
			layers: []
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	},
	{
		name: "EVAC",
		icon: null,
		description: {
			general:
				"Evac is scenario for simulate emergency evacuation in building under fire case. Allows you to establish your building structute (2d) and puts some agents over the enviroment set up",
			images: []
		},
		authors: [
			{
				name: "Cristian",
				lastname: "Tissera",
				description:
					"Associate Professor of National University of San Luis (UNSL)",
				image: null
			},
			{
				name: "Danilo Guido",
				lastname: "Labella",
				description: "Assistant of the National University of San Luis (UNSL)",
				image: null
			}
		],
		elements: {
			enviromentals: [
				{
					id: 3,
					name: "Wall",
					description: "Represents a wall from the building",
					image: null,
					icon: null
				},
				{
					id: 4,
					name: "Exit",
					description:
						"An exit cell from the enviroment, agents will escape from this cell",
					image: null,
					icon: null
				},
				{
					id: 5,
					name: "Fire",
					description:
						"A fire cell. the fire will propagate under the rules specified in the EVAC core",
					image: null,
					icon: null
				},
				{
					id: 9,
					name: "Sensor",
					description:
						"A sensor that can sense agents around, get data and suggest paths to escape",
					image: null,
					icon: null
				}
			],
			agents: [
				{
					id: 6,
					name: "Closest exit",
					description:
						"This agent will always try to escape to the closest exit around him",
					image: null,
					icon: null
				},
				{
					id: 7,
					name: "Follower",
					description:
						"This agent will follow other agents that knows how to exit",
					image: null,
					icon: null
				},
				{
					id: 8,
					name: "Known exit",
					description: "This agent will escape for the known exit for him",
					image: null,
					icon: null
				}
			],
			layers: [
				{
					id: 10,
					name: "most frequent route",
					description:
						"This layer shows which are the path that the agents most frequent at the time of their escape",
					image: null,
					icon: null
				},
				{
					id: 11,
					name: "Heat map",
					description: "This layer shows where the heat is most concentrated",
					image: null,
					icon: null
				}
			]
		}
	}
];

// const Scenarios = null;

export default Scenarios;
