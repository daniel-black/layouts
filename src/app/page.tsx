import ScrollableContainer from "./components/scrollable-container";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  });
  const posts = await res.json() as Post[];

  return (
    <main className="grow p-3 pb-0">
      <ScrollableContainer
        height="h-[90%]"
        classes="p-5 bg-stone-950 rounded-xl border border-stone-700 shadow"
      >
        <ul className="space-y-5">
          {posts.map(post => (
            <li key={post.id} className="p-3 rounded-lg bg-stone-500 shadow">
              <h2 className="text-lg text-stone-100">{post.title}</h2>
              <p className="text-stone-300">{post.body}</p>
            </li>
          ))}
        </ul>
      </ScrollableContainer>
      <div className="h-[10%] flex items-center space-x-2">
        <input type="text" className="w-full h-14 px-6 rounded-full bg-stone-950 border border-stone-700 outline-none" />
        <button className="block h-14 w-14 rounded-full bg-stone-950 border border-stone-700 font-bold text-lg">→</button>
      </div>
    </main>
  );
}
