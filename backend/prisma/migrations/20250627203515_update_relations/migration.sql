-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_groupID_fkey";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_groupID_fkey" FOREIGN KEY ("groupID") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
