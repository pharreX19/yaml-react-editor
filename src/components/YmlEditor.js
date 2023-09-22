import React from "react";
import YamlEditor from "@focus-reactive/react-yaml";

const YMLEditor = () => {
  const [obj, setObj] = React.useState({
    id: "CVE-2000-0114",
    info: {
      name: "Microsoft FrontPage Extensions Check (shtml.dll)",
      author: "r3naissance",
      severity: "low",
      description:
        "Frontpage Server Extensions allows remote attackers to determine the name of the anonymous account via an RPC POST request to shtml.dll in the /_vti_bin/ virtual directory.",
      remediation: "Upgrade to the latest version.",
      classification: {
        "cve-id": "CVE-2000-0114"
      },
      reference: [
        "https://nvd.nist.gov/vuln/detail/CVE-2000-0114",
        "https://www.exploit-db.com/exploits/19897"
      ],
      tags: "cve,cve2000,frontpage,microsoft"
    },
    requests: [
      {
        method: "GET",
        path: ["{{BaseURL}}/_vti_inf.html"],
        "matchers-condition": "and",
        matchers: [
          {
            type: "status",
            status: [200]
          },
          {
            type: "word",
            part: "body",
            words: ["_vti_bin/shtml.dll"]
          }
        ]
      }
    ]
  });
  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <div style={{ height: 400, textAlign: "left" }}>
      <YamlEditor
        text={"test: 123"}
        onChange={handleChange}
        onError={() => {}}
      />
    </div>
  );
};

export default YMLEditor;
