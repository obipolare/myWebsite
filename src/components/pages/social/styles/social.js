import styled from "styled-components";

export const MainMenuListSocial = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-column: span 4;
  font-weight: 600;
  text-align: center;
  transition: 0.2s;
  border-radius: 0.4rem;
`;

export const MainMenuLinkSocial = styled.a`
  flex: 1;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  font-size: 1.8rem;
  transition: 0.2s;
`;

export const MainMenuSocial = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  row-gap: 1.6rem;
  @media (max-width: 460px) {
    column-gap: 0.8rem;
  }
`;
export const MainSectionSocial = styled.ul`
  display: grid;
  width: 58%;
  place-items: center;
  height: 100%;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    /*lg */
    width: 80%;
  }
  @media (max-width: 460px) {
    width: 100%;
  }
`;

// export {
//   MainMenuLinkSocial,
//   MainMenuListSocial,
//   MainMenuSocial,
//   MainSectionSocial,
// };
