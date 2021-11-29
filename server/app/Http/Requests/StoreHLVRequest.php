<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreHLVRequest extends FormRequest
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
            'idCLB' => 'required|max:10',
            'TenHLV' => 'required|max:45',
            'NgaySinh' => 'required|max:45',
            'ChucVu' => 'required|max:45',
            'AnhDaiDien' => 'required|max:45',
            // 'created_at' => 'required|max:45',
            // 'updated_at' => 'required|max:45',
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
            'TenHLV.required' => 'Chưa nhập tên HLV',
            'ChucVu.required' => 'Chưa nhập chức vụ',
            'NgaySinh.required' => 'Chưa nhập ngày sinh ',
            'AnhDaiDien.required' => 'Chưa cập nhập ảnh đại diện',
            // 'TenHLV.unique' => 'sđsad',
            
        ];
    }
}
