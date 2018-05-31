import gql from 'graphql-tag';

export const defaults = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
};

export const resolvers = {
  Mutation: {
    visibilityFilter: (_, { filter }, { cache }) => {
      cache.writeData({ data: { visibilityFilter: filter } });
      return null;
    },
    addTodo: (_, { text }, { cache }) => {
      const query = gql`
        query GetTodos {
          todos @client {
            id
            text
            completed
          }
        }
      `;
      const previous = cache.readQuery({ query });
      const newTodo = {
        id: nextTodoId++,
        text,
        completed: false,
        __typename: 'TodoItem',
      };
      const data = {
        todos: previous.todos.concat([newTodo]),
      };
      cache.writeData({ data });
      return newTodo;
    },
  },
};
