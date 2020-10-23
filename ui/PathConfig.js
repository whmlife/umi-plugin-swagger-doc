import { useState, useRef } from "react";
import { Button, Row, Select, Input } from "antd";

const { Option } = Select;

function PathHeader({ pathItem, onChange, value, onGenerate }) {
  const { path, tag, routes } = pathItem;
  console.log(pathItem, "---- path item");
  const { current: onRouteChange } = useRef(route => {
    onChange(route, path);
  });

  const [fileName, setFileName] = useState(path.replace(/\//g, "-"));
  const { current: onFileNameChange } = useRef(event => {
    setFileName(event.target.value);
  });

  return (
    <Row justify="start">
      <div>
        <Select
          style={{ width: 160 }}
          onChange={onRouteChange}
          onClick={event => event.preventDefault()}
          value={value}
          placeholder="请选择目标节点"
        >
          {routes?.map(route => (
            <Option key={route}>{route}</Option>
          ))}
        </Select>
      </div>
      <div>
        <Input
          prefix="文件名称"
          value={fileName}
          onChange={onFileNameChange}
          placeholder="输入文件名称"
        />
      </div>
      <div>
        <Button onClick={onGenerate}>生成Service</Button>
      </div>
    </Row>
  );
}

export default PathHeader;