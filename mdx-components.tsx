import { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";
import type { MDXComponents } from "mdx/types";
import {
  Heading,
  Text,
  List,
  ListItem,
  Link,
  Code,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
} from "@chakra-ui/react";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <Heading
      as="h1"
      className="fade-in"
      size="xl"
      fontWeight="bold"
      marginY={4}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <Heading as="h2" size="lg" fontWeight="bold" marginY={4} {...props} />
  ),
  h3: (props: HeadingProps) => (
    <Heading as="h3" size="md" fontWeight="bold" marginY={4} {...props} />
  ),
  h4: (props: HeadingProps) => (
    <Heading as="h4" size="sm" fontWeight="bold" {...props} />
  ),
  p: (props: ParagraphProps) => <Text lineHeight="tall" {...props} />,
  ol: (props: ListProps) => (
    <List as="ol" styleType="decimal" paddingLeft={5} spacing={2} {...props} />
  ),
  ul: (props: ListProps) => (
    <List as="ul" styleType="disc" paddingLeft={5} spacing={1} {...props} />
  ),
  li: (props: ListItemProps) => <ListItem paddingLeft={1} {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <Text as="em" fontWeight="bold" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <Text as="strong" fontWeight="bold" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = { color: "blue.400", _hover: { color: "blue.600" } };

    if (href?.startsWith("/")) {
      return (
        <Link href={href} {...className} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <Link
        href={href}
        isExternal={!href?.startsWith("#")}
        {...className}
        {...props}
      >
        {children}
      </Link>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);

    return (
      <Code
        backgroundColor="GrayText"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <Table variant="simpaddingLefte">
      <Thead>
        <Tr>
          {data.headers.map((header, index) => (
            <Th key={index}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.rows.map((row, index) => (
          <Tr key={index}>
            {row.map((cell, cellIndex) => (
              <Td key={cellIndex}>{cell}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <chakra.blockquote
      color="gray.700"
      borderLeft="3px solid"
      borderColor="gray.300"
      paddingLeft={4}
      marginLeft="0.075em"
      {...props}
    />
  ),
};

export function useMDXComponents(
  otherComponents: MDXComponents
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}
