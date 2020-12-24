export let users = {
    'kalyan@gmail.com': 'qwerty',
    'raja@gmail.com': 'poiuyt'
};

export const states = {
    PENDING: "PENDING",
    INPROGRESS: "INPROGRESS",
    COMPLETED: "COMPLETED"
};

export let workflows = {
    'kalyan@gmail.com': {
        workflows: [
            { id: 1, name: "Workflow 1", status: states.PENDING, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.PENDING },
                {id: 2, name: "Node 2", description: "Description 2", status: states.INPROGRESS },
                {id: 3, name: "Node 3", description: "Description 3", status: states.PENDING },
                {id: 4, name: "Node 4", description: "Description 4", status: states.COMPLETED }
            ] },
            { id: 2, name: "Workflow 2", status: states.COMPLETED, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.PENDING },
                {id: 2, name: "Node 2", description: "Description 2", status: states.COMPLETED },
                {id: 3, name: "Node 3", description: "Description 3", status: states.PENDING },
                {id: 4, name: "Node 4", description: "Description 4", status: states.INPROGRESS }
            ] },
            { id: 3, name: "Workflow 3", status: states.PENDING, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.COMPLETED },
                {id: 2, name: "Node 2", description: "Description 2", status: states.INPROGRESS },
                {id: 3, name: "Node 3", description: "Description 3", status: states.COMPLETED },
                {id: 4, name: "Node 4", description: "Description 4", status: states.PENDING }
            ] },
            { id: 4, name: "Workflow 4", status: states.PENDING, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.PENDING },
                {id: 2, name: "Node 2", description: "Description 2", status: states.COMPLETED },
                {id: 3, name: "Node 3", description: "Description 3", status: states.PENDING },
                {id: 4, name: "Node 4", description: "Description 4", status: states.INPROGRESS }
            ] },
            { id: 5, name: "Workflow 5", status: states.COMPLETED, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.INPROGRESS },
                {id: 2, name: "Node 2", description: "Description 2", status: states.PENDING },
                {id: 3, name: "Node 3", description: "Description 3", status: states.COMPLETED },
                {id: 4, name: "Node 4", description: "Description 4", status: states.INPROGRESS }
            ] }
        ]
    },
    'raja@gmail.com': {
        workflows: [
            { id: 1, name: "Workflow 1", status: states.COMPLETED, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.PENDING },
                {id: 2, name: "Node 2", description: "Description 2", status: states.PENDING },
                {id: 3, name: "Node 3", description: "Description 3", status: states.PENDING },
                {id: 4, name: "Node 4", description: "Description 4", status: states.PENDING }
            ] },
            { id: 2, name: "Workflow 2", status: states.PENDING, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.PENDING },
                {id: 2, name: "Node 2", description: "Description 2", status: states.PENDING },
                {id: 3, name: "Node 3", description: "Description 3", status: states.PENDING },
                {id: 4, name: "Node 4", description: "Description 4", status: states.PENDING }
            ] },
            { id: 3, name: "Workflow 3", status: states.PENDING, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.PENDING },
                {id: 2, name: "Node 2", description: "Description 2", status: states.PENDING },
                {id: 3, name: "Node 3", description: "Description 3", status: states.PENDING },
                {id: 4, name: "Node 4", description: "Description 4", status: states.PENDING }
            ] },
            { id: 4, name: "Workflow 4", status: states.COMPLETED, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.PENDING },
                {id: 2, name: "Node 2", description: "Description 2", status: states.PENDING },
                {id: 3, name: "Node 3", description: "Description 3", status: states.PENDING },
                {id: 4, name: "Node 4", description: "Description 4", status: states.PENDING }
            ] },
            { id: 5, name: "Workflow 5", status: states.PENDING, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.PENDING },
                {id: 2, name: "Node 2", description: "Description 2", status: states.PENDING },
                {id: 3, name: "Node 3", description: "Description 3", status: states.PENDING },
                {id: 4, name: "Node 4", description: "Description 4", status: states.PENDING }
            ] },
            { id: 6, name: "Workflow 6", status: states.PENDING, nodes: [
                {id: 1, name: "Node 1", description: "Description 1", status: states.PENDING },
                {id: 2, name: "Node 2", description: "Description 2", status: states.PENDING },
                {id: 3, name: "Node 3", description: "Description 3", status: states.PENDING },
                {id: 4, name: "Node 4", description: "Description 4", status: states.PENDING }
            ] }
        ]
    }
};