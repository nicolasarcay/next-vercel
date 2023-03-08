export interface propsWithChildren {
  children: React.ReactNode;
}

export const LightLayout = ({ children }: propsWithChildren) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      {children}
    </div>
  );
};
