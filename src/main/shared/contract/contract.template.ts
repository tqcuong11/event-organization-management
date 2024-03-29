export const ContractTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hire Service Contract</title>
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: content-box;
      }
      body {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .contract {
        padding: 50px 0;
        width: 60%;
        line-height: 25px;
      }
      .contract_header {
        text-align: center;
      }
      .header_title {
        text-transform: uppercase;
      }
      .header_title p {
        text-decoration: underline;
        font-weight: 600;
      }

      .header_name {
        text-transform: uppercase;
      }
      .contract_container {
        margin-top: 20px;
      }
      .contract_container_side_group_field {
        display: flex;
      }
      .contract_container_side_group_input {
        flex: 6;
      }
      .contract_container_side_group_field label {
        flex: 4;
      }

      table {
        border-collapse: collapse;
        width: 100%;
      }

      td,
      th {
        border: 1px solid black;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <main class="contract">
      <div class="contract_header">
        <h3 class="header_title">Cộng hoà xã hội chủ nghĩa việt nam</h3>
        <p>Độc lập - Tự do - Hạnh phúc</p>
        <h3 class="header_name">Hợp đồng cho thuê dịch vụ sự kiện</h3>
      </div>
      <div class="contract_container">
        <div class="contract_container_based_on">
          <p>Căn cứ Bộ luật dân sự năm 2015;</p>
          <p>Căn cứ sự thoả thuận của hai bên.</p>
          <h4>Hôm nay, ngày 21 tháng 02 năm 2023</h4>
        </div>
        <div class="contract_container_side">
          <h3>BÊN THUÊ DỊCH VỤ (sau đây gọi là Bên A)</h3>
          <div class="contract_container_side_group">
            <p>Trường hợp 1: Nếu chọn thuê với vai trò là cá nhân</p>
            <div class="contract_container_side_group_field">
              <label>TÊN</label>
              <div class="contract_container_side_group_input">
                Ông bà: <label>Trần Thanh Hoàng</label>
              </div>
            </div>
            <div class="contract_container_side_group_field">
              <label>Địa chỉ</label>
              <div class="contract_container_side_group_input">
                <label>Hoà Châu, Hoà Vang, Đà Nẵng</label>
              </div>
            </div>
            <div class="contract_container_side_group_field">
              <label>Số điện thoại</label>
              <div class="contract_container_side_group_input">
                <label>0932581538</label>
              </div>
            </div>
            <div class="contract_container_side_group_field">
              <label>Email</label>
              <div class="contract_container_side_group_input">
                <label>thanhhoang280202@gmail.com</label>
              </div>
            </div>
          </div>
        </div>
        <div class="contract_container_side">
          <h3>BÊN CHO THUÊ DỊCH VỤ (sau đây gọi là Bên B)</h3>
          <div class="contract_container_side_group">
            <div class="contract_container_side_group_field">
              <label>TÊN CÔNG TY</label>
              <div class="contract_container_side_group_input">
                CÔNG TY: <label>paralas</label>
              </div>
            </div>
            <div class="contract_container_side_group_field">
              <label>ĐẠI DIỆN</label>
              <div class="contract_container_side_group_input">
                ÔNG/BÀ: <label>Trần Thanh Hoàng</label>
              </div>
            </div>
            <div class="contract_container_side_group_field">
              <label>CHỨC DANH:</label>
              <div class="contract_container_side_group_input">
                <label>Senior Intern</label>
              </div>
            </div>
            <div class="contract_container_side_group_field">
              <label>Địa chỉ</label>
              <div class="contract_container_side_group_input">
                <label>Hoà Vang, Hoà Châu</label>
              </div>
            </div>
            <div class="contract_container_side_group_field">
              <label>Mã số thuế</label>
              <div class="contract_container_side_group_input">
                <label>MK09ry923y9833</label>
              </div>
            </div>
            <div class="contract_container_side_group_field">
              <label>Số Điện Thoại</label>
              <div class="contract_container_side_group_input">
                <label>0932581538</label>
              </div>
            </div>
            <div class="contract_container_side_group_field">
              <label>Email</label>
              <div class="contract_container_side_group_input">
                <label>paralis.vn@gmail.com</label>
              </div>
            </div>
            <div class="contract_container_side_group_field">
              <label>Tài khoản số</label>
              <div class="contract_container_side_group_input">
                <label>8000128020201</label>
              </div>
            </div>
          </div>
        </div>
        <p>
          Hai bên thỏa thuận ký kết hợp đồng xây dựng này với các điều khoản
          sau:
        </p>
        <div class="contract_container_roles">
          <div class="contract_container_role">
            <h3 class="contract_container_role_header">
              ĐIỀU 1: NỘI DUNG DỊCH VỤ THỰC HIỆN
            </h3>
            <div class="contract_container_role_content">
              <p>
                Bên A đồng ý chọn Bên B thực hiện tổ chức chương trình … tại
                Công viên Đâm Sen.
              </p>
              <p>
                Thời gian: Ngày tháng năm 2009 đến ngày tháng năm 2009. Từ 8h00
                – 17h30 hàng ngày.
              </p>
              <p>Địa điểm: Công viên Đâm Sen.</p>
              <p>
                Các nội dung công việc đã được bên A phê duyệt trong bảng danh
                mục dịch vụ đính kèm.
              </p>
            </div>
            <table class="contract_container_role_table">
              <tr>
                <th>STT</th>
                <th>Hạng mục báo giá</th>
                <th>Thông tin chi tiết</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
                <th>Đơn vị tiền</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Phòng sự kiện</td>
                <td>Phòng sự kiện Vip</td>
                <td>1</td>
                <td>1500000</td>
                <td>VNĐ</td>
              </tr>
              <tr>
                <td rowspan="3">2</td>
                <td rowspan="3">Khu vực check in</td>
                <td>Backdrop cứng</td>
                <td>1</td>
                <td>1500000</td>
                <td>VNĐ</td>
              </tr>
              <tr>
                <td>Backdrop cứng</td>
                <td>1</td>
                <td>1500000</td>
                <td>VNĐ</td>
              </tr>
              <tr>
                <td>Backdrop cứng</td>
                <td>1</td>
                <td>1500000</td>
                <td>VNĐ</td>
              </tr>

              <tr>
                <td colspan="4">Tổng chi phí</td>
                <td>40.850.000</td>
                <td>VND</td>
              </tr>
              <tr>
                <td colspan="4">VAT 10%</td>
                <td>4.085.000</td>
                <td>VND</td>
              </tr>
              <tr>
                <td colspan="4">Tổng chi phí cần chi trả</td>
                <td>40.850.000</td>
                <td>VND</td>
              </tr>
            </table>
          </div>
          <div class="contract_container_role">
            <h3 class="contract_container_role_header">
              ĐIỀU 2: GIÁ TRỊ DỊCH VỤ – PHƯƠNG THỨC THANH TOÁN
            </h3>
            <div class="contract_container_role_content">
              <p>2.1 Giá dịch vụ: VNĐ</p>
              <p>VAT (10%) VNĐ</p>
              <p>Tổng tiền VNĐ</p>
              <label>(Bằng chữ:) </label>
            </div>
            <div class="contract_container_role_content">
              <p>
                2.2 Ngay khi bên B thực hiện cung cấp dịch vụ theo quy định của
                Điều 1, hai bên sẽ thống nhất và ký kết biên bản thanh lý hợp
                đồng trong đó có ghi rõ những hạng mục còn thiếu hoặc phát sinh
                (nếu có). Việc bỏ bớt hoặc bổ sung hạng mục (nếu có) phải được
                Bên A chấp thuận trước bằng văn bản, giá trị dịch vụ ghi trong
                biên bản thanh lý hợp đồng sẽ là giá trị thanh toán cuối cùng
              </p>
              <p>
                Đính kèm bảng kê chi tiết hạng mục là một phần không tách rời
                hợp đồng này.
              </p>
            </div>
            <div class="contract_container_role_content">
              <p>
                2.3 Phương thức thanh toán: (Thanh toán bằng tiền mặt hoặc
                chuyển khoản)
              </p>
              <p>- Bên A thực hiện đặt cọc 30% giá trị hợp đồng cho bên B.</p>
              <p>
                - Bên A sẽ thanh toán bằng tiền mặt hoặc chuyển khoản cho bên B
                100% phần giá trị dịch vụ kể trên và phát sinh (nếu có) căn cứ
                trên Biên bản thanh lý hợp đồng trong thời gian 5 ngày làm việc
                kể từ khi kết thúc thời gian thực hiện chương trình và bên A
                nhận được biên bản thanh lý hợp đồng và hóa đơn tài chính hợp
                pháp của bên B.
              </p>
            </div>
          </div>
          <div class="contract_container_role">
            <h3 class="contract_container_role_header">
              Điều 3: THỜI HẠN THỎA THUẬN
            </h3>
            <div class="contract_container_role_content">
              <p>
                3.1 Thời gian hiệu lực hợp đồng: Bắt đầu từ khi bản hợp đồng này
                được ký kết đến khi thanh toán hợp đồng kèm theo biên bản thanh
                lý hợp đồng này.
              </p>
              <p>
                3.2 Trong trường hợp hết thời gian hiệu lực ghi trong hợp đồng
                mà bên A chưa thanh toán dứt điểm các khoản tiền liên quan đến
                hợp đồng này thì thời gian hiệu lực của hợp đồng sẽ mặc nhiên
                được gia hạn cho đến khi các khoản tiền được thanh toán dứt điểm
                cho bên B và hợp đồng này mặc nhiên đựơc cả hai bên A và B coi
                như đã được thanh lý.
              </p>
              <p>
                3.3 Trường hợp một trong hai bên vi phạm bất kỳ điều khoản nào
                trong bản hợp đồng này hoặc các phụ lục hoặc văn bản bổ sung
                đính kèm có liên quan đến hợp đồng này thì bên bị vi phạm được
                quyền chấm dứt trước thời hạn. Bên vi phạm phải bồi thường cho
                bên bị vi phạm những thiệt hại do việc vi phạm này của mình gây
                ra.
              </p>
            </div>
          </div>
          <div class="contract_container_role">
            <h3 class="contract_container_role_header">
              Điều 4: QUYỀN LỢI VÀ NGHĨA VỤ CỦA BÊN A
            </h3>
            <div class="contract_container_role_content">
              <ol class="contract_container_role_group">
                Quyền lợi
                <li>
                  Nhận được dịch vụ tốt nhất và đầy đủ nhất do bên B cung cấp
                </li>
                <li>
                  Quản lý và giám sát các hoạt động do bên B cung cấp và thực
                  hiện
                </li>
              </ol>
              <ol class="contract_container_role_group">
                Nghĩa vụ
                <li>Thanh toán cho bên B theo như thoả thuận tại điều</li>
                <li>
                  Phối hợp với bên B giải quyết các vấn đề phát sinh xảy ra
                  trong chương trình thuộc về trách nhiệm của bên A.
                </li>
              </ol>
            </div>
          </div>
          <div class="contract_container_role">
            <h3 class="contract_container_role_header">
              Điều 5: QUYỀN LỢI VÀ NGHĨA VỤ CỦA BÊN B
            </h3>
            <div class="contract_container_role_content">
              <label>Quyền lợi</label>
              <p>Nhận được đầy đủ thanh toán của bên A như điều 2.</p>
              <label>Nghĩa vụ</label>
              <ol class="contract_container_role_group">
                <li>
                  Bảo đảm tuyển dụng, cung cấp cho bên A các hạng hạng mục đã
                  nêu với số lượng , chất lượng như yêu cầu.
                </li>
                <li>
                  Trong quá trình diễn ra chương trình, Bên B cam kết sẽ trực
                  tiếp theo dõi, giám sát, ghi chép và chụp hình lại trong biên
                  bản nghiệm thu bàn giao cho Bên A.
                </li>
                <li>
                  Cung cấp hóa đơn tài chính hợp pháp đối với dịch vụ cung cấp
                  theo hợp đồng này và các hạng mục phát sinh được bên A chấp
                  thuận ( nếu có).
                </li>
                <li>
                  Phối hợp với bên A giải quyết các vấn đề phát sinh xảy ra
                  trong chương trình thuộc về trách nhiệm của bên B.
                </li>
                <li>
                  Bên B sẽ không chịu trách nhiệm về những dịch vụ nào khác
                  ngoài nội dung và Bảng danh mục dịch vụ
                </li>
                <li>
                  Bên B cam kết không cung cấp và tiết lộ bất kỳ thông tin nào
                  liên quan trực tiếp hay gián tiếp đến sản phẩm của Bên A cũng
                  như các nội dung khác cho bất kỳ bên thứ ba nào mà không có sự
                  đồng ý trước của Bên A bằng văn bản.
                </li>
              </ol>
            </div>
          </div>
          <div class="contract_container_role">
            <h3 class="contract_container_role_header">
              ĐIỀU 6: GIẢI QUYẾT TRANH CHẤP
            </h3>
            <div class="contract_container_role_content">
              <p>
                Mọi tranh chấp liên quan đến Hợp đồng này trước hết sẽ được giải
                quyết thông qua thương lượng và hoà giải giữa các bên. Nếu tranh
                chấp không giải quyết được thông qua hoà giải thì các bên nhất
                trí rằng một trong các bên có quyền đưa ra giải quyết tại Tòa án
                có thẩm quyền.
              </p>
              <label>Nghĩa vụ</label>
            </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>
`;
