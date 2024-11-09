import { PostService } from './05-dependency-b';
import {
  JsonDatabaseService,
  LocalDatabaseService,
  WebApiPostService,
} from './05-dependency-c';

(async () => {
  // const postProvider = new JsonDatabaseService();
  // const postProvider = new LocalDatabaseService();
  const postProvider = new WebApiPostService();
  const postService = new PostService(postProvider);
  const posts = await postService.getPosts();
  console.log({ posts });
})();
