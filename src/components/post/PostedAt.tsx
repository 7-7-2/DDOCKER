import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

const PostedAt = ({ at, posts = false }: { at: string; posts?: boolean }) => {
  return <Posted className={posts ? '' : PaddingPost}>{at}</Posted>;
};

const Posted = styled.div`
  font-size: var(--font-sizes-xs);
  line-height: 20px;
  color: #767676;
`;

const PaddingPost = css`
  padding-top: 12px;
  padding-bottom: 20px;
`;

export default PostedAt;
