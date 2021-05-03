import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./fooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onclickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onclickFetchUser}>データ取得</button>
      {error ? (
        <p>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading......</p>
      ) : (
        userProfiles.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
}
