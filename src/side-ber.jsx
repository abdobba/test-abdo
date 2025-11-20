export default function SideBar() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 dark:bg-dark-bg border border-gray-300 dark:border-dark-border mb-4">
      <div>
        <div className="text-xl font-medium text-black dark:text-dark-text">ChitChat</div>
        <p className="text-gray-500 dark:text-dark-text">You have a new message!</p>
      </div>
    </div>
  );
}