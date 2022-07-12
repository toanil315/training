import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../util/type";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPostList: builder.query<IPost[], void>({
      query: () => "posts",
      providesTags: (result) => {
        return result
          ? [
              ...result.map(
                ({ id }) =>
                  ({
                    type: "Post",
                    id,
                  } as const)
              ),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }];
      },
    }),
    getPostDetail: builder.query<IPost, number>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{type: 'Post', id}]
    }),
    updatePost: builder.mutation<void, IPost>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: [{type: 'Post', id: 'LIST'}],
      async onQueryStarted(payload, {dispatch, queryFulfilled}) {
        try {
            await queryFulfilled
            console.log(payload)
            dispatch(postApi.util.updateQueryData(
                'getPostDetail',
                payload.id,
                (draft) => {
                    Object.assign({...draft, ...payload})
                }
            ))
        }
        catch(error) {
            console.log(error)
        }
      }
    }),
  }),
});

export const {
  useGetPostListQuery,
  useGetPostDetailQuery,
  useLazyGetPostDetailQuery,
  useUpdatePostMutation,
} = postApi;
