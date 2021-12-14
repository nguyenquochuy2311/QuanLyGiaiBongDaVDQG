<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
class StoreCauThuRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'idCLB' => 'required|max:15',
            'TenCT' => 'required|max:45',
            'NgaySinh' => 'required|max:45',
            'ViTri' => 'required|max:45',
            'SoAo' => 'required|max:45',
            'ChieuCao' => 'required|max:45',
            'LoaiCauThu' => 'required|max:45',
            // 'AnhDaiDien' => 'required|max:45',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi thêm dữ liệu',
            'detail' => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'idCLB.required' => 'Chưa nhập mã Clb của cầu thủ',
            'TenCT.required' => 'Chưa nhập tên cầu thủ',
            'ViTri.required' => 'Chưa nhập vị trí cầu thủ',
            'NgaySinh.required' => 'Chưa nhập ngày sinh ',
            'SoAo.required' => 'Chưa nhập số áo cầu thủ',
            'ChieuCao.required' => 'Chưa nhập chiều cao cầu thủ',
            'LoaiCauThu.required' => 'Chưa nhập tên loại cầu thủ',
            'AnhDaiDien.required' => 'Chưa cập nhập ảnh đại diện',

        ];
    }
}
