import { Badge } from "../Badge";
import { Text } from "../Text";
import { IProductItemBody } from "./ProductItemBody.interface";

export const ProductItemBody = ({ product, ...props }: IProductItemBody) => {
  return (
    <section {...props}>
      <div>
        {product.description ? (
          <Text size="md">{product.description}</Text>
        ) : (
          <Text>Описание отсуствует</Text>
        )}
      </div>
      <div className="mt-[15px] grid gap-x-[60px] gap-y-[20px] xl:grid-cols-2">
        <div>
          {product?.characteristics.length !== 0 && (
            <ul className="flex flex-col gap-y-[10px]">
              {product.characteristics.map((chracteristic) => (
                <li
                  key={chracteristic.name}
                  className="grid grid-cols-[auto_1fr_auto] gap-x-[15px]"
                >
                  <Text as="span" size="md" className="font-bold">
                    {chracteristic.name}
                  </Text>
                  <span className="inline-block h-[16px] w-full border-b border-dashed border-b-[#C4C4C4]"></span>
                  <Text as="span" size="md">
                    {chracteristic.value}
                  </Text>
                </li>
              ))}
            </ul>
          )}
          {Boolean(product.tags) && product.tags.length !== 0 && (
            <ul className="mt-[20px] flex flex-wrap items-center gap-[5px]">
              {product.tags.map((tag) => (
                <li key={tag} className="flex">
                  <Badge size="sm" appearance="gray-outline">
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col gap-y-[25px]">
          {product.advantages && (
            <dl className="border-l-[2px] border-l-[#1DC37E] pl-[15px]">
              <dt className="font-bold">Преимущества</dt>
              <dd className="mt-[5px]">{product.advantages}</dd>
            </dl>
          )}
          {product.disadvantages && (
            <dl className="border-l-[2px] border-l-[#Недостатки] pl-[15px]">
              <dt className="font-bold">Недостатки</dt>
              <dd className="mt-[5px]">{product.disadvantages}</dd>
            </dl>
          )}
        </div>
      </div>
    </section>
  );
};
