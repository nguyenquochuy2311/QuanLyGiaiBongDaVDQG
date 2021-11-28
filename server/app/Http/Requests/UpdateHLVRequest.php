<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class UpdateHLVRequest extends FormRequest
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
            'idCLB'=> 'required',
            'TenHLV'=> 'required',
            'NgaySinh'=> 'required',
            'ChucVu'=> 'required',
            // 'AnhDaiDien'=>'required',
            Rule::unique('hlv', 'idClb')->ignore($this->id), 
            Rule::unique('hlv', 'TenHLV')->ignore($this->id),
            Rule::unique('hlv', 'NgaySinh')->ignore($this->id),
            Rule::unique('hlv', 'ChucVu')->ignore($this->id)
            // Rule::unique('hlv', 'AnhDaiDien')->ignore($this->id)
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'message' => 'Lỗi cập nhật dữ liệu',
            'detail' => $validator->errors()
        ]));
    }

    public function messages()
    {
        return [
            'idCLB.required' => 'Mã Câu lạc bộ không được bỏ trống!',
            'TenHLV.required' => 'Tên HLV không được bỏ trống!',
            'NgaySinh.required' => 'Ngày sinh HLV không được bỏ trống!',
            'ChucVu.required' => 'Chức vụ HLV không được bỏ trống!',
            // 'AnhDaiDien.required' => 'Ảnh HLV HLV không được bỏ trống!',

        ];
    }
}
