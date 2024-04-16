/* 요청 처리 모음 (서버) */
/* 임시코드입니다. */

import { HttpResponse, http } from 'msw';

export type Todo = {
  id: number;
  title: string;
};

const todos: Todo[] = [
  {
    id: 1,
    title: '할일 1',
  },
  {
    id: 2,
    title: '할일 2',
  },
  {
    id: 3,
    title: '할일 3',
  },
];

export const todoMocks = [
  http.get('/todos', () => HttpResponse.json(todos)),

  http.post('/todos', async ({ request }) => {
    const newTodo = await request.json();

    return HttpResponse.json(newTodo, { status: 201 });
  }),

  http.patch('/todos', async ({ request }) => {
    const req = await request.json();

    return HttpResponse.json(req, { status: 200 });
  }),

  http.delete('/todos/:id', ({ params }) => HttpResponse.json({ id: params.id })),
];
