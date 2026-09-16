import clientPromise from "@/lib/mongodb";
import type { LinkId } from "@/lib/linkIds";

const COLLECTION = "clicks";

type ClickDoc = {
  _id: LinkId;
  count: number;
};

async function getCollection() {
  const client = await clientPromise;
  return client.db().collection<ClickDoc>(COLLECTION);
}

export async function getClickCounts(): Promise<Record<string, number>> {
  const collection = await getCollection();
  const docs = await collection.find().toArray();
  return docs.reduce<Record<string, number>>((acc, doc) => {
    acc[doc._id] = doc.count;
    return acc;
  }, {});
}

export async function incrementClickCount(id: LinkId): Promise<number> {
  const collection = await getCollection();
  const result = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return result?.count ?? 0;
}
