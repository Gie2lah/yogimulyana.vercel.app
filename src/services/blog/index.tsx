export const getData = async ({ params }: { params: { id: string } }) => {
  const res = await fetch("/api/post/" + params.id);

  // const res = await fetch("/api/blog/" + id);

  // fetching data dari api internal
  // const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

//  const getData = async () => {
//    const res = await fetch("/api/post/" + id);
//    const json = await res.json();

//    if (!json) {
//      router.push("/404");
//      return;
//    }

//    setTitle(json.post.title);
//    setContent(json.post.content);
//  };
