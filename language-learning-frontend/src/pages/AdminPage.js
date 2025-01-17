import UsersList from "../components/UsersList";
import AddWordForm from "../components/AddWordForm";
import WordList from "../components/WordList";
import TopBar from "../components/TopBar";

function AdminPage() {
return (
    <>
    <TopBar/>
    <AddWordForm />
    <WordList />
    <UsersList/>
    </>
);
};
 export default AdminPage;